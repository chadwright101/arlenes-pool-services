import { MobileFooter } from "./mobile/mobile-footer";
import { DesktopFooter } from "./desktop/desktop-footer";

export function Footer() {
  return (
    <footer className="bg-white mt-10 desktop:mt-0 desktop:mx-10 border-t-2 border-grey/25 desktop:border-none">
      <MobileFooter />
      <DesktopFooter />
    </footer>
  );
}
