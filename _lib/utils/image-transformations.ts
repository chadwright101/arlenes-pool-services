export function transformImageUrl(
  url: string,
  transformations: {
    width?: number;
    height?: number;
  } = {}
): string {
  if (!url) return "";

  if (!url.includes("wordpress.arlenespools.co.za")) {
    return url;
  }

  try {
    const params = new URLSearchParams();
    params.append("url", url);
    params.append("quality", "70");
    params.append("format", "jpg");

    if (transformations.width) {
      params.append("width", transformations.width.toString());
    }

    if (transformations.height) {
      params.append("height", transformations.height.toString());
    }

    return `/api/image?${params.toString()}`;
  } catch (error) {
    return url;
  }
}

export function transformTeamMemberImage(url: string): string {
  return transformImageUrl(url, {
    width: 700,
    height: 700,
  });
}

export function transformGalleryImage(
  url: string,
  isDesktop: boolean = false
): string {
  if (isDesktop) {
    return transformImageUrl(url, {
      width: 600,
      height: 400,
    });
  } else {
    return transformImageUrl(url, {
      width: 950,
      height: 950,
    });
  }
}
