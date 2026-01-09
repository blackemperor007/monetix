import { Invoice as PrismaInvoice } from "@/app/generated/prisma/client";
import { InvoiceLine } from "@/app/generated/prisma/client";

export interface Invoice extends PrismaInvoice {
  lines: InvoiceLine[];
}

export interface Totals {
  totalHT: number;
  totalVAT: number;
  totalTTC: number;
}