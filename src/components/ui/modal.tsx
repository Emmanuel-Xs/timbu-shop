import { useCallback, useLayoutEffect, useRef } from "react";
import { cn } from "../../lib/utils";
import { useLockBodyScroll } from "@uidotdev/usehooks";

export type ModalProps = {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  className?: string;
};

export const Modal = ({ children, open, onClose, className }: ModalProps) => {
  useLockBodyScroll();
  const ref = useRef<HTMLDialogElement>(null);

  useLayoutEffect(() => {
    const dialog = ref.current;

    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }

    const handleClose = () => {
      onClose();
      dialog.close();
    };

    dialog.addEventListener("close", handleClose);

    return () => {
      dialog.removeEventListener("close", handleClose);
    };
  }, [open, onClose]);

  const handleClickOutside = useCallback(
    (e: React.MouseEvent<HTMLDialogElement>) => {
      const dialog = e.currentTarget;
      const dialogDimensions = dialog.getBoundingClientRect();
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        dialog.close();
      }
    },
    []
  );

  return (
    <dialog
      ref={ref}
      className={cn("backdrop:bg-black/35", className)}
      onClick={handleClickOutside}
    >
      {children}
    </dialog>
  );
};
