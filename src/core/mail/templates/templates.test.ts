import { describe, expect, it } from "vitest";
import { contactClientEmail, contactCompanyEmail } from "./contact";
import { phoneValuationCompanyEmail } from "./phone-valuation";
import {
  supportCallbackClientEmail,
  supportCallbackCompanyEmail,
  supportEmailClientEmail,
  supportEmailCompanyEmail,
} from "./support";
import { valuationClientEmail, valuationCompanyEmail } from "./valuation";

// T-05b · Las plantillas conservan asunto y datos de cada email de leads, contacto y venta.
const valuation = {
  name: "Ana",
  email: "ana@example.com",
  phone: "600111222",
  brand: "Tesla",
  model: "Model 3",
  year: "2021",
  kilometers: "45000",
  fuel: "Eléctrico",
};

function expectContains(html: string, values: string[]) {
  for (const value of values) expect(html).toContain(value);
}

describe("plantillas de tasación (AC-15, AC-20)", () => {
  it("aviso al concesionario: asunto con origen y nombre, y todos los datos", () => {
    const { subject, html } = valuationCompanyEmail({ ...valuation, comments: "Sin golpes" }, "Chatbot");
    expect(subject).toBe("Solicitud de tasación (Chatbot) - Ana");
    expect(html).toContain("Nueva Solicitud de Tasación (desde Chatbot)");
    expectContains(html, [...Object.values(valuation), "Sin golpes"]);
  });

  it("copia al usuario: asunto fijo, sus datos, «-» sin comentarios y el año en el pie", () => {
    const { subject, html } = valuationClientEmail(valuation, new Date("2030-05-01"));
    expect(subject).toBe("Copia de tu solicitud de tasación");
    expectContains(html, ["Hola Ana,", ...Object.values(valuation)]);
    expect(html).toContain("<tr><th>Comentarios</th><td>-</td></tr>");
    expect(html).toContain("<strong>Lebauto</strong> © 2030");
  });

  it("valoración por teléfono: aviso con nombre, teléfono, marca y modelo (AC-20)", () => {
    const { subject, html } = phoneValuationCompanyEmail({
      name: "Luis",
      phone: "699000111",
      brand: "Kia",
      model: "EV6",
    });
    expect(subject).toBe("Solicitud de LLAMADA para tasación - Luis");
    expectContains(html, ["Luis", "<strong>699000111</strong>", "Kia", "EV6"]);
  });
});

describe("plantillas de contacto (AC-16)", () => {
  const contact = {
    name: "Marta",
    surnames: "López Ruiz",
    email: "marta@example.com",
    phone: "611222333",
    message: "Quiero información del Model Y",
  };

  it("aviso al concesionario con todos los datos del formulario", () => {
    const { subject, html } = contactCompanyEmail(contact);
    expect(subject).toBe("Nueva Solicitud de Contacto - Marta");
    expectContains(html, Object.values(contact));
  });

  it("confirmación al usuario con asunto y texto fijos", () => {
    const { subject, html } = contactClientEmail();
    expect(subject).toBe("Confirmación de Contacto");
    expect(html).toContain("Nos pondremos en contacto contigo lo antes posible.");
  });
});

describe("plantillas de soporte del chatbot (AC-19, AC-20)", () => {
  const support = {
    name: "Pablo",
    phone: "622333444",
    email: "pablo@example.com",
    userQuestion: "¿Tenéis garantía?",
  };

  it("petición de llamada: aviso y confirmación con sus datos", () => {
    const company = supportCallbackCompanyEmail(support);
    expect(company.subject).toBe("Soporte: Solicitud de LLAMADA de Pablo");
    expectContains(company.html, Object.values(support));

    const client = supportCallbackClientEmail(support);
    expect(client.subject).toBe("Hemos recibido tu solicitud de llamada - Lebauto");
    expectContains(client.html, ["Hola Pablo,", "<strong>622333444</strong>", "¿Tenéis garantía?"]);
  });

  it("consulta por email: aviso (teléfono opcional) y confirmación", () => {
    const company = supportEmailCompanyEmail({ ...support, phone: undefined });
    expect(company.subject).toBe("Soporte: Nueva consulta de Pablo");
    expectContains(company.html, ["Pablo", "pablo@example.com", "No proporcionado", "¿Tenéis garantía?"]);

    const client = supportEmailClientEmail(support);
    expect(client.subject).toBe("Hemos recibido tu consulta - Lebauto");
    expectContains(client.html, ["Hola Pablo,", "<strong>pablo@example.com</strong>", "¿Tenéis garantía?"]);
  });
});
