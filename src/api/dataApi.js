const apiBase = 'https://swapi.co/api';

class GetData {
  async getResource(URL) {
    const res = await fetch(`${apiBase}${URL}`);
    if (!res.ok) {
      throw new Error('Could not fetch');
    }

    return res.json();
  }

  getAll(URL) {
    return this.getResource(URL);
  }
}

export default GetData;
