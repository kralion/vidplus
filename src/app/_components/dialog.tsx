"use client";
import * as Dialog from "@radix-ui/react-dialog";

export const DialogRadix = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="ml-2 mt-4 flex w-32 items-center justify-center rounded-md bg-indigo-600 py-2 text-white shadow-sm">
        Click me
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 h-full w-full bg-black opacity-40" />
        <Dialog.Content className="fixed left-[50%] top-[50%] mx-auto w-full max-w-lg translate-x-[-50%] translate-y-[-50%] px-4">
          <div className="rounded-md bg-white px-4 py-6 shadow-lg">
            <div className=" mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <Dialog.Title className="mt-3 text-center text-lg font-medium text-gray-800">
              {" "}
              Successfully accepted!
            </Dialog.Title>
            <Dialog.Description className="mt-1 text-center text-sm leading-relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
              eget lorem dolor sed viverra ipsum nunc. Consequat id porta nibh
              venenatis.
            </Dialog.Description>
            <div className="mt-3 items-center gap-2 text-sm sm:flex">
              <Dialog.Close asChild>
                <button className="mt-2 w-full flex-1 rounded-md bg-indigo-600 p-2.5 text-white outline-none ring-indigo-600 ring-offset-2 focus:ring-2">
                  Dashboard
                </button>
              </Dialog.Close>
              <Dialog.Close asChild>
                <button
                  className="mt-2 w-full flex-1 rounded-md border p-2.5 text-gray-800 outline-none ring-indigo-600 ring-offset-2 focus:ring-2"
                  aria-label="Close"
                >
                  Undo
                </button>
              </Dialog.Close>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
