"use client";

import { Flex } from "@radix-ui/themes";

export default function SignUpForm() {
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <Flex direction="row" gap="4" align="center" justify="center">
        <div>
          <label className="font-medium">Name</label>
          <input
            type="text"
            required
            className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
          />
        </div>
        <div>
          <label className="font-medium">Last Name</label>
          <input
            type="text"
            required
            className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
          />
        </div>
      </Flex>
      <div>
        <label className="font-medium">Email</label>
        <input
          type="email"
          required
          className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
        />
      </div>
      <div>
        <label className="font-medium">Password</label>
        <input
          type="password"
          required
          className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
        />
      </div>
      <button className="mt-4 w-full rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white duration-150 hover:bg-indigo-500 active:bg-indigo-600">
        Sign in
      </button>
    </form>
  );
}
