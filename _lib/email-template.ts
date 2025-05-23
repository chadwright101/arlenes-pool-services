interface EmailTemplateProps {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export const emailTemplate = ({
  name,
  email,
  phone,
  message,
}: EmailTemplateProps) => {
  return `<html lang="en">
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Arlene's Pool Services</title>
  </head>
  <body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 1rem;">
    <table style="width: 100%; background-color: #4079B7;">
      <tr>
        <td>
          <h1 style="padding: 0 1rem; color: white">Arlene's Pool Services</h1>
        </td>
      </tr>
    </table>

    <table style="width: 100%; padding: 1rem;">
      <tr>
        <td>
          <h3 style="font-size: 1.25rem">Website form submission</h3>
          <p style="font-size: 1rem; margin-top: 1rem; font-weight: 500;">
            Name: <span style="font-weight: 200; font-style: italic;">${name}</span>
          </p>
          <p style="font-size: 1rem; font-weight: 500;">
            Email address: <span style="font-weight: 200; font-style: italic;">${email}</span>
          </p>
          ${
            phone
              ? `
              <p style="font-size: 1rem; font-weight: 500;">
            Phone: <span style="font-weight: 200; font-style: italic;">${phone}</span>
          </p>
          `
              : ""
          }
          <p style="font-size: 1rem; font-weight: 500;">
            Message:
            <br />
            <span style="font-weight: 200; font-style: italic;">${message}</span>
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
};
