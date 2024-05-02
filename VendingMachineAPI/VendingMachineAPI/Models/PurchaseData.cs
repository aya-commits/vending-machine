namespace VendingMachineAPI.Models
{
    public class PurchaseData
    {
        public double PurchaseAmount
        {
            get;

            set;
        }

        public double TenderAmount
        {
            get;

            set;
        }

        public int[] CoinDenominations 
        { 
            get; 
            
            set; 
        }
    }
}