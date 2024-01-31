export default (req, res) => {
    if (req.method === 'POST') {
      const name = req.body.name || 'Anonymous';
      res.status(200).json({ message: `Hello, ${name}!` });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  };