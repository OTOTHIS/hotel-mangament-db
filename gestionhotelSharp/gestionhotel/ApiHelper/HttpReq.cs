using gestionhotel.Types;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.ServiceModel.Channels;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace gestionhotel.ApiHelper
{
 

    internal class HttpReqHelper
    {
   static string Api = Properties.Settings.Default.apiUrl;
        /*   public static async Task<List<T>> GetData<T>(string apiUrl)
           {
               string fullUrl = $"{Api}{apiUrl}";
               try
               {
                   using (HttpClient client = new HttpClient())
                   {
                       HttpResponseMessage response = await client.GetAsync(fullUrl);

                       if (response.IsSuccessStatusCode)
                       {
                           string content = await response.Content.ReadAsStringAsync();

                           // Deserialize the JSON array into a List<T>
                           List<T> items = JsonConvert.DeserializeObject<List<T>>(content);

                           // Return the list of items
                           return items;
                       }
                       else
                       {
                           Console.WriteLine($"Error: {response.StatusCode} - {response.ReasonPhrase}");
                       }
                   }
               }
               catch (Exception ex)
               {
                   Console.WriteLine($"Exception: {ex.Message}");
               }

               // If an error occurs or the response is not successful, return an empty list or handle it as needed
               return new List<T>();
           }


   */
        public static async Task<List<T>> GetData<T>(string apiUrl)
        {
            string fullUrl = $"{Api}{apiUrl}";

            try
            {
                using (HttpClient client = new HttpClient())
                {
                    HttpResponseMessage response = await client.GetAsync(fullUrl);

                    if (response.IsSuccessStatusCode)
                    {
                        string content = await response.Content.ReadAsStringAsync();

                        // Deserialize the JSON array into a List<T>
                        List<T> items = JsonConvert.DeserializeObject<List<T>>(content);

                        // Return the list of items
                        return items;
                    }
                    else
                    {
                        Console.WriteLine($"Error: {response.StatusCode} - {response.ReasonPhrase}");
                        // Optionally throw an exception here if you want to handle errors at a higher level
                    }
                }
            }
            catch (HttpRequestException ex)
            {
                Console.WriteLine($"HTTP Request Exception: {ex.Message}");
                // Optionally throw an exception here if you want to handle errors at a higher level
            }
            catch (JsonException ex)
            {
                Console.WriteLine($"JSON Deserialization Exception: {ex.Message}");
                // Optionally throw an exception here if you want to handle errors at a higher level
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Exception: {ex.Message}");
                // Optionally throw an exception here if you want to handle errors at a higher level
            }

            // If an error occurs or the response is not successful, return an empty list or handle it as needed
            return new List<T>();
        }

        /*
                public async static Task<bool> PostData(object requestData, string apiUrl)
                {


                    string fullUrl = $"{Api}{apiUrl}";

                    using (HttpClient httpClient = new HttpClient())
                    {
                        try
                        {
                            // Convert the data to JSON format
                            string jsonContent = Newtonsoft.Json.JsonConvert.SerializeObject(requestData);

                            // Create the HttpContent for the request
                            HttpContent content = new StringContent(jsonContent, System.Text.Encoding.UTF8, "application/json");

                            // Send the POST request
                            HttpResponseMessage response = await httpClient.PostAsync(fullUrl, content);

                            // Check if the request was successful
                            if (response.IsSuccessStatusCode)
                            {
                                return true;
                            }
                            else
                            {
                                return false;
                            }
                        }
                        catch (Exception ex)
                        {
                            MessageBox.Show($"Error: {ex.Message}");
                            return false;
                        }
                    }
                }

                */

        public async static Task<ApiResult> PostData(object requestData, string apiUrl)
        {
            string fullUrl = $"{Api}{apiUrl}";

            using (HttpClient httpClient = new HttpClient())
            {
                try
                {
                    // Convert the data to JSON format
                    string jsonContent = Newtonsoft.Json.JsonConvert.SerializeObject(requestData);

                    // Create the HttpContent for the request
                    HttpContent content = new StringContent(jsonContent, System.Text.Encoding.UTF8, "application/json");

                    // Send the POST request
                    HttpResponseMessage response = await httpClient.PostAsync(fullUrl, content);

                    // Check if the request was successful
                    if (response.IsSuccessStatusCode)
                    {
                        // Return success with optional response content
                        string responseContent = await response.Content.ReadAsStringAsync();
                        return new ApiResult { IsSuccess = true, ResponseContent = responseContent };
                    }
                    else
                    {
                        // Return failure with error message
                        string errorMessage = await response.Content.ReadAsStringAsync();
                        return new ApiResult { IsSuccess = false, ErrorMessage = errorMessage };
                    }
                }
                catch (Exception ex)
                {
                    // Return failure with exception message
                    return new ApiResult { IsSuccess = false, ErrorMessage = ex.Message };
                }
            }
        }
    }
}

