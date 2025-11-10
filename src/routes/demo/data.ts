export async function getCountryCities(country: string): Promise<string[]> {
  const res = await fetch(
    'https://countriesnow.space/api/v0.1/countries/cities',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ country: country.toLowerCase() }),
    },
  )

  const result = await res.json()

  if (result.error) {
    console.error('Error fetching cities:', result.msg)
    return []
  }

  return result.data || []
}
