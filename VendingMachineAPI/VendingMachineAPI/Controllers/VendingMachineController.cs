using Microsoft.AspNetCore.Mvc;
using VendingMachineAPI.Helpers;
using VendingMachineAPI.Models;

namespace VendingMachineAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class VendingMachineController : ControllerBase
    {
        [HttpPost("calculateChange")]
        public ActionResult<int[]> CalculateChange([FromBody] PurchaseData request)
        {
            try
            {
                int[] change = ChangeHelper.CalculateChange(request.PurchaseAmount, request.TenderAmount, request.CoinDenominations);

                return Ok(change);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error: {ex.Message}");
            }
        }

    }
}

