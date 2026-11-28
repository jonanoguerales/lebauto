import "server-only";

export { sendMail, sendCompanyMail, type MailContent, type MailMessage } from "./transporter";
export * from "./templates/valuation";
export * from "./templates/phone-valuation";
export * from "./templates/contact";
export * from "./templates/support";
