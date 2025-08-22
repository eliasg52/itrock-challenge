import { useState, useEffect } from "react";

export const useCheckout = (visible: boolean) => {
  const [cardData, setCardData] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [purchaseResult, setPurchaseResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  useEffect(() => {
    if (visible) {
      setCardData(null);
      setIsProcessing(false);
      setValidationError("");
      setPurchaseResult(null);
    }
  }, [visible]);

  const handleCardChange = (form: any) => {
    setCardData(form);
    if (validationError) {
      setValidationError("");
    }
  };

  const handlePurchase = async () => {
    setValidationError("");

    if (!cardData || !cardData.values) {
      setValidationError("Por favor, completá todos los campos de la tarjeta");
      return;
    }

    const { number, expiry, cvc } = cardData.values;

    if (!number?.trim() || !expiry?.trim() || !cvc?.trim()) {
      setValidationError("Por favor, completá todos los campos de la tarjeta");
      return;
    }

    setIsProcessing(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));

      const isSuccess = cardData?.valid && Math.random() > 0.1;

      if (isSuccess) {
        setPurchaseResult({
          success: true,
          message: "¡Compra realizada con éxito!",
        });
      } else {
        setPurchaseResult({
          success: false,
          message: "Error al procesar el pago. Intentá de nuevo.",
        });
      }
    } catch (error) {
      setPurchaseResult({
        success: false,
        message: "Error inesperado. Intentá de nuevo.",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleContinue = (onClose: () => void) => {
    if (purchaseResult?.success) {
      onClose();
    } else {
      setPurchaseResult(null);
    }
  };

  return {
    cardData,
    isProcessing,
    validationError,
    purchaseResult,
    handleCardChange,
    handlePurchase,
    handleContinue,
  };
};
