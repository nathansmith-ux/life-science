export default async function getJournalData(topicOne) {
  const apiKey = process.env.SCIENCEJOURNAL_API_KEY;

  // // Construct the API URL
  const url = `https://api.springernature.com/meta/v2/json?q=${topicOne}&api_key=${apiKey}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;

  } catch (error) {
    console.error('Error fetching journal data:', error instanceof Error ? error.message : error);
  }
}
