import { useEffect, useState } from "react";
import { client } from "../../configApi/client";
import { useMediaQuery } from "react-responsive";
import { StyledHeader, StyledTexts } from "./Header.styled";

function Header() {
  const [headerTexts, setHeaderTexts] = useState([]);
  const isMobile = useMediaQuery({ query: "(max-width: 428px)" });

  useEffect(() => {
    client
      .getEntries({
        content_type: "ecomHeader",
      })
      .then((response) => {
        if (response.items.length > 0) {
          const texts = response.items[0].fields.headerTexts;
          setHeaderTexts(texts || []);
        } else {
          console.error("No entries found for content type ecomHeader");
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <StyledHeader>
      <StyledTexts>
        {headerTexts.length > 0 ? (
          <>
            {isMobile ? (
              <span>{headerTexts[1]}</span>
            ) : (
              <div>
                {headerTexts.map((text, index) => (
                  <span key={index}>{text}</span>
                ))}
              </div>
            )}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </StyledTexts>
    </StyledHeader>
  );
}

export default Header;
