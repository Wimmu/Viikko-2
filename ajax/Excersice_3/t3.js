async function fetchData() {
  const url = 'https://reqres.in/api/unknown/23';

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('GET Request Response:', data);
  } catch (error) {
    console.error('GET Request Error:', error.message);
  }
}

async function postData() {
  const url = 'https://reqres.in/api/unknown';

  const data = {
    name: 'Pirkko Pekka',
    job: 'Software Engineer',
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    console.log('POST Request Response:', responseData);
  } catch (error) {
    console.error('POST Request Error:', error.message);
  }
}

async function putData() {
  const url = 'https://reqres.in/api/unknown/23';

  const data = {
    name: 'Seppo Sippola',
    job: 'Engineer',
  };

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    console.log('PUT Request Response:', responseData);
  } catch (error) {
    console.error('PUT Request Error:', error.message);
  }
}

async function deleteData() {
  const url = 'https://reqres.in/api/unknown/23';

  try {
    const response = await fetch(url, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    console.log('DELETE Request Response:', responseData);
  } catch (error) {
    console.error('DELETE Request Error:', error.message);
  }
}

fetchData();
postData();
putData();
deleteData();
