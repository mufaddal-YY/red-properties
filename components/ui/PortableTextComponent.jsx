import PortableText from "react-portable-text";

const myPortableTextComponents = {
  types: {
    image: ({ value }) => (
      <img src={value.imageUrl} alt={value.alt || "Image"} />
    ),
    callToAction: ({ value, isInline }) =>
      isInline ? (
        <a href={value.url} className="callToActionInline">
          {value.text}
        </a>
      ) : (
        <div className="callToActionBlock">{value.text}</div>
      ),
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      );
    },
    strong: ({ children }) => (
      <strong style={{ color: "#E36C0A" }}>{children}</strong>
    ),
  },
};

const PortableTextComponent = ({ content }) => {
  return (
    <div className="ml-4">
      <PortableText
      content={content}
      components={myPortableTextComponents}
      serializers={{
        h1: (props) => <h1 style={{ color: "red" }} {...props} />,
        h4: (props) => <h4 style={{ fontSize: "28px" }} {...props} />,
        h5: (props) => <h4 style={{ fontSize: "18px" }} {...props} />,
        li: ({ children }) => (
          <li className="special-list-item list-disc leading-loose ">
            {children}
          </li>
        ),
        normal: ({ children }) => {
          if (children.length === 1 && children[0] === "") {
            return <br />;
          }
          return <p>{children}</p>;
        },
      }}
    />
    </div>
    
  );
};

export default PortableTextComponent;
