export default function BillingAddress({ label, address }: any) {
  return (
    <div>
      <dt className="font-medium text-gray-900">{label}</dt>
      <dd className="mt-2 text-gray-700">
        <address className="not-italic">
          <span className="block">
            {address.firstName} {address.lastName}
          </span>
          <span className="block">{address.address1}</span>
          <span className="block">
            {address.city}, {address.state} {address.postcode}
          </span>
        </address>
      </dd>
    </div>
  );
}
