import { describe, expect } from "vitest";
import { getByTestId, getByText, screen } from "@testing-library/dom";
import { render, waitFor } from "@testing-library/react";

import Footer from ".";

describe("Footer", () => {
  beforeEach(() => {
    render(<Footer />);
  });
  it("Asserting that the logo show in the footer", () => {
    expect(screen.getByTestId("logo")).toBeInTheDocument();
  });
  it("This address info should is on screen", () => {
    const address = screen.getByTestId("address");
    const addressInfo = screen.getByTestId("address-info");
    expect(address).toBeInTheDocument();
    expect(addressInfo).toBeInTheDocument();
  });
  it("This contact info should is on screen", () => {
    const contact = screen.getByTestId("contact");
    const contactInfo = screen.getByTestId("contact-info");
    expect(contact).toBeInTheDocument();
    expect(contactInfo).toBeInTheDocument();
  });

  it("This social info should is on screen", () => {
    const social = screen.getByTestId("social");
    const socialInfo = screen.getByTestId("social-info");
    expect(social).toBeInTheDocument();
    expect(socialInfo).toBeInTheDocument();
  });
  it("Should show in screen the footer rights", () => {
    const rights = screen.getByTestId("rights");
    const privacy = screen.getByText(/políticas de privacidade/i);
    const termsOfUse = screen.getByText(/termos de uso/i);
  });
})
