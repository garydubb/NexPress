// Import the NodeByUri query here

export default function Container({ children }: any) {
  return (
    <>
      <div className="md:container md:mx-auto max-w-7xl px-2 py-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </>
  );
}
