import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";

export async function GET(request: NextRequest) {
  try {
    // Get URL parameters
    const { searchParams } = new URL(request.url);
    const imageUrl = searchParams.get("url");
    const width = parseInt(searchParams.get("width") || "0", 10);
    const height = parseInt(searchParams.get("height") || "0", 10);
    const quality = 70;

    // Validate URL
    if (!imageUrl) {
      return new NextResponse("Missing image URL", { status: 400 });
    }

    // Fetch the image
    const response = await fetch(imageUrl);

    if (!response.ok) {
      return new NextResponse(`Failed to fetch image: ${response.statusText}`, {
        status: response.status,
      });
    }

    const imageBuffer = await response.arrayBuffer();

    // Process the image with Sharp
    let sharpInstance = sharp(Buffer.from(imageBuffer));

    // Apply resizing with default fit
    if (width || height) {
      sharpInstance = sharpInstance.resize({
        width: width || undefined,
        height: height || undefined,
        fit: "inside", // Default to maintain aspect ratio
      });
    }

    // Always output as JPEG with fixed quality
    sharpInstance = sharpInstance.jpeg({ quality });

    // Process the image
    const processedImageBuffer = await sharpInstance.toBuffer();

    // Return the processed image
    return new NextResponse(processedImageBuffer, {
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("Image processing error:", error);
    return new NextResponse(
      `Error processing image: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
      {
        status: 500,
      }
    );
  }
}
