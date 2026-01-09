"use client";

import Image from "next/image";
import Wrapper from "./components/wrapper";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { createEmptyInvoice } from "./actions";
import { useUser } from "@clerk/nextjs";
import confetti from "canvas-confetti";

export default function Home() {
  const { user } = useUser()
  const [invoiceName, setInvoiceName] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const email = user?.primaryEmailAddress?.emailAddress as string
  // const [invoices, setInvoices] = useState<Invoice[]>([]);

   useEffect(() => {
    // fetchInvoices()
  }, [email])

  useEffect(() => {
    setIsNameValid(invoiceName.length <= 60)
  }, [invoiceName])

  const handleCreateInvoice = async () => {
    try {
      if (email) {
        await createEmptyInvoice(email, invoiceName)
      }
      // fetchInvoices()
      setInvoiceName("")
      const modal = document.getElementById('my_modal_3') as HTMLDialogElement
      if (modal) {
        modal.close()
      }
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        zIndex: 9999
      })

    } catch (error) {
      console.error("Erreur lors de la création de la facture :", error);
    }
  }

  return (
    <Wrapper>
      <div className="flex flex-col space-y-4">
        <div className="grid md:grid-cols-3 gap-4">
          <div
            className="cursor-pointer border border-accent rounded-xl flex flex-col justify-center items-center p-5"
            onClick={() =>
              (
                document.getElementById("my_modal_1") as HTMLDialogElement
              ).showModal()
            }
          >
            <div className="font-bold text-accent">Nouvelle Facture</div>
            <div className="bg-accent-content text-accent  rounded-full p-2 mt-2">
              <Plus className="h-6 w-6" />
            </div>
          </div>
          {/* {invoices.length > 0 && (
            invoices.map((invoice, index) => (
              <div key={index}>
                <InvoiceComponent invoice={invoice} index={index} />
              </div>
            ))
          )} */}
        </div>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Nouvelle Facture</h3>
            <input
              type="text"
              placeholder="Nom de la facture (max 60 caractères)"
              className="input input-bordered w-full my-4"
              value={invoiceName}
              onChange={(e) => setInvoiceName(e.target.value)}
            />

            {!isNameValid && (
              <p className="mb-4 text-sm">
                Le nom ne peut pas dépasser 60 caractères.
              </p>
            )}

            <button
              className="btn btn-accent"
              disabled={!isNameValid || invoiceName.length === 0}
              onClick={handleCreateInvoice}
            >
              Créer
            </button>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </Wrapper>
  );
}
