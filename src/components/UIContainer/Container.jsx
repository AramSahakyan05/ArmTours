export const Container = ({ children }) => {
    return (
      <div
        className="container"
        style={{
          maxWidth: "var(--max-width)",
          margin: "auto",
        }}
      >
        {children}
      </div>
    );
};
  