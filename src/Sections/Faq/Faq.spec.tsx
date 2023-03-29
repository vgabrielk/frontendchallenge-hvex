import { fireEvent, getByTestId, screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { describe, expect, vi } from "vitest";
import Faq from ".";
import { FaqData } from "../../Mock/FaqData/FaqData";

describe("Title have to be in the document", () => {
  render(<Faq />);
  it("title", () => {
      const title = screen.getByTestId("title");
      expect(title.innerHTML).toEqual("Perguntas Frequentes");
    });
});
