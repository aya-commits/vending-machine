namespace VendingMachineAPI.Helpers
{
    public static class ChangeHelper
    {
        public static int[] CalculateChange(double purchaseAmount, double tenderAmount, int[] coinDenominations)
        {
            int purchaseAmountCents = (int)(purchaseAmount * 100); // converting purchase amount to cents

            int tenderAmountCents = (int)(tenderAmount * 100); // converting tender amount to cents

            int changeAmount = tenderAmountCents - purchaseAmountCents;

            List<int> change = new List<int>();

            Array.Sort(coinDenominations);

            Array.Reverse(coinDenominations);

            foreach (int denomination in coinDenominations)
            {
                while (changeAmount >= denomination)
                {
                    changeAmount -= denomination;

                    change.Add(denomination);
                }
            }

            return change.ToArray();
        }
    }
}