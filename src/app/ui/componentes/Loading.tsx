export function Loading() {
  return (
    <div className="flex items-center justify-center h-screen flex-col bg-sky-50">
      <div className="backgroundLoading bg-current">
        <iframe
          src="https://lottie.host/?file=ce74ce3c-76db-488a-95b4-4011b8e4f8db/u6aryLT3jT.json"
          className="h-[300px] w-full rounded-full border-b-4 border-rmBlue shadow-[0_30px_29px_-15px_rgba(0,181,204,0.1)]"
        ></iframe>
      </div>
        <p className="font-creepster uppercase tracking-[.25em] text-lg text-rmBlue">Loading</p>
    </div>
  );
}
