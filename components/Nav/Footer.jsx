import Image from "next/image";
import Logo from "@/public/logo.png";
import Link from "next/link";
import { MdCall, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <main className="bg-white">
      <section className="container py-6">
        <article className="flex flex-col md:flex-row lg:flex-row justify-between md:items-center lg:items-center">
          <article>
            <Link href="/">
              <Image src={Logo} width={60} height={60} alt="Footer Logo" />
            </Link>
            <h4 className="text-lg font-semibold py-2">
              Red Property Solutions
            </h4>
            <p className="text-md w-full lg:w-1/2">
              U-13, First floor Runwal Platinum, NDA Pashan Rd. Bavdhan. Near
              Indusind bank. Ram nagar colony Pune 411021.
            </p>
          </article>
          <article className="mt-4">
            <Link
              href={`tel:9850907066`}
              className="flex gap-2 text-md font-medium py-2">
              <span className="text-xl text-red-500">
                <MdCall />
              </span>
              +91- 9850907066
            </Link>

            <Link
              href={`mailto:info@redproperties.com`}
              className="flex gap-2 text-md font-medium py-2">
              <span className="text-xl text-red-500">
                <MdEmail />
              </span>
              info@redproperties.com
            </Link>
          </article>
        </article>
      </section>
    </main>
  );
};

export default Footer;
