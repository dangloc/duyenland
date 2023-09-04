import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max-w-2xl m-auto">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-center flex-col">
          <Link href="/">
            <Image
              src="/logo-teel.svg"
              style={{ height: "65px", objectFit: "cover", margin: "auto" }}
              width={120}
              height={43}
              alt="logo"
            />
          </Link>
          <p className="mt-2 font-light" >
            Duyên Land - Chuyên BĐS Quảng Nam - Đà Nẵng
          </p>
        </div>
      </div>
      <div className="text-center font-light">
        <p className="text-[#a4a6a4]">Make by DangLoc</p>
      </div>
      <div className="text-center font-light">
        <p>@ 2023 DuyenLand. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
