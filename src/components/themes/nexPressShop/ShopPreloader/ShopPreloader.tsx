const ShopPreloader = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200"></div>
      <style>{`
                                .loader {
                                                border-top-color: #3498db;
                                                animation: spin 1s linear infinite;
                                                height: 30px; /* Adjust the size as needed */
                                                width: 30px; /* Adjust the size as needed */
                                }
                                @keyframes spin {
                                                0% {
                                                                transform: rotate(0deg);
                                                }
                                                100% {
                                                                transform: rotate(360deg);
                                                }
                                }
                `}</style>
    </div>
  );
};

export default ShopPreloader;
