import { motion } from "framer-motion";
import { MdCancel } from "react-icons/md";
import { useState, useEffect } from "react";

export const AnalyzeRecipe = ({ setAnalyze }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading time
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white w-full max-w-[400px] rounded-xl shadow-xl p-5"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Nutritional Facts
          </h2>
          <button
            onClick={() => setAnalyze(false)}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <MdCancel size={20} className="text-gray-500" />
          </button>
        </div>

        {isLoading ? (
          // Loading State
          <div className="py-20 flex flex-col items-center justify-center space-y-3">
            <div className="relative">
              <div className="w-12 h-12 border-4 border-mainblue/30 rounded-full animate-spin"></div>
              <div className="w-12 h-12 border-4 border-transparent border-t-mainblue rounded-full animate-spin absolute top-0 left-0"></div>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-800">Analyzing Recipe</p>
              <p className="text-xs text-gray-500 mt-1">Please wait a moment...</p>
            </div>
          </div>
        ) : (
          // Nutritional Facts Content
          <div className="border border-gray-200 rounded-lg p-4 text-sm">
            {/* Calories */}
            <div className="border-b border-gray-200 pb-3">
              <div className="flex justify-between items-center">
                <span className="font-bold">Calories</span>
                <span>230</span>
              </div>
            </div>

            {/* Fat Content */}
            <div className="border-b border-gray-200 py-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">Total Fat</span>
                <div className="flex items-center gap-2">
                  <span>28.6g</span>
                  <span className="text-xs text-gray-500">44%</span>
                </div>
              </div>
              <div className="ml-3 text-xs text-gray-600 mt-1 space-y-1">
                <div className="flex justify-between items-center">
                  <span>• Saturated Fat</span>
                  <div className="flex items-center gap-2">
                    <span>2.2g</span>
                    <span className="text-gray-500">11%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>• Trans Fat</span>
                  <span>0.1g</span>
                </div>
              </div>
            </div>

            {/* Other Nutrients */}
            <div className="py-3 space-y-2">
              {[
                { name: "Cholesterol", value: "0mg", dv: "0%" },
                { name: "Sodium", value: "3506.5mg", dv: "146%" },
                { name: "Total Carbohydrate", value: "22.4g", dv: "7%" },
                { name: "Dietary Fiber", value: "1.8g", dv: "7%" },
                { name: "Total Sugars", value: "12.9g", dv: "" },
                { name: "Protein", value: "6.3g", dv: "13%" },
              ].map((nutrient, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="font-medium">{nutrient.name}</span>
                  <div className="flex items-center gap-2">
                    <span>{nutrient.value}</span>
                    {nutrient.dv && (
                      <span className="text-xs text-gray-500">{nutrient.dv}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Vitamins & Minerals */}
            <div className="border-t border-gray-200 pt-3">
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { name: "Vitamin D", value: "0µg", dv: "0%" },
                  { name: "Calcium", value: "71.1mg", dv: "7%" },
                  { name: "Iron", value: "2mg", dv: "11%" },
                  { name: "Potassium", value: "371.8mg", dv: "8%" },
                ].map((nutrient, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span>{nutrient.name}</span>
                    <div className="flex items-center gap-1">
                      <span>{nutrient.value}</span>
                      <span className="text-gray-500">{nutrient.dv}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => setAnalyze(false)}
            className="px-4 py-1.5 bg-mainblue text-white text-sm rounded-lg 
                     hover:bg-mainblue/90 transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};
