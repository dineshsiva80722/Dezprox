import React from "react";

interface Link {
  title: string;
  links: string[];
}

interface FooterColumnProps {
  title: string;
  links: string[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col">
      <div className="text-[rgba(230,230,235,1)]">{title}</div>
      {links.map((link, index) => (
        <a
          key={index}
          href="#"
          className={`${index > 0 ? "mt-[23px]" : "mt-[26px]"}`}
        >
          {link}
        </a>
      ))}
    </div>
  );
};

const Footersection: React.FC = () => {
  const columns: Link[] = [
    {
      title: "Product",
      links: [
        "School ERP",
        "Salary Management",
        "Students Management",
        "Work Management"
      ],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Career page", "Contact"],
    },
    {
      title: "",
      links: ["Terms of service", "Privacy policy"],
    },
  ];

  return (
    <footer className="bg-[rgba(2,10,15,1)] w-full">
      <div className="flex w-[1009px] max-w-full mx-auto items-stretch gap-5 flex-wrap justify-between py-[137px] max-md:py-10 px-4">
        <div className="flex items-stretch gap-4 mt-[47px] max-md:mt-10">
          <a href="#" aria-label="Facebook">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/264ac794305946dcad9345a9fcf4cf6f/a4f0e160d85f4f907b8564431d88aebad7181ac36460dc99a63e3bc94427d631?placeholderIfAbsent=true"
              alt="Facebook"
              className="aspect-[1] object-contain w-[18px] shrink-0"
            />
          </a>
          <a href="#" aria-label="Twitter">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/264ac794305946dcad9345a9fcf4cf6f/bccb55201d2f08dba9127ea59253366af06d0c0b4c1609c70c9c42ec138d9069?placeholderIfAbsent=true"
              alt="Twitter"
              className="aspect-[1] object-contain w-[18px] shrink-0"
            />
          </a>
          <a href="#" aria-label="Instagram">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/264ac794305946dcad9345a9fcf4cf6f/102e1bdfbd24ffc8ad6f1d051511f43eb9b6af46f37348d1427ba0d1e67baf0d?placeholderIfAbsent=true"
              alt="Instagram"
              className="aspect-[1] object-contain w-[18px] shrink-0"
            />
          </a>
          <a href="#" aria-label="LinkedIn">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/264ac794305946dcad9345a9fcf4cf6f/2c68bd5a3cb08e70d05c4961c0ea4709e75552e52945c0c1fa3b7c4a438d2e30?placeholderIfAbsent=true"
              alt="LinkedIn"
              className="aspect-[1] object-contain w-[18px] shrink-0"
            />
          </a>
        </div>
        <div className="flex items-stretch gap-[40px_100px] text-[15px] text-[rgba(164,168,175,1)] font-medium leading-[1.4] flex-wrap max-md:max-w-full">
          {columns.map((column, index) => (
            <FooterColumn
              key={index}
              title={column.title}
              links={column.links}
            />
          ))}
        </div>
      </div>
      <div className="text-[rgba(164,168,175,1)] text-sm font-medium leading-[1.2] text-center pb-10">
        © 2025 Dezprox - service and products
      </div>
    </footer>
  );
};

export default Footersection;