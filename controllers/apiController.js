
const processRequest = (req, res) => {
  const { data, file_b64 } = req.body;


  if (!Array.isArray(data)) {
    return res
      .status(400)
      .json({ is_success: false, message: "Invalid data format" });
  }

  const numbers = data.filter((item) => !isNaN(item));
  const alphabets = data.filter((item) => /^[A-Za-z]+$/.test(item));
  const highestLowercase =
    alphabets
      .filter((item) => item === item.toLowerCase())
      .sort()
      .pop() || null;


  const fileValid = file_b64 ? true : false;
  const fileMimeType = fileValid ? "application/octet-stream" : null; 
  const fileSizeKb = file_b64 ? (file_b64.length * 0.75) / 1024 : 0; 

  const response = {
    is_success: true,
    user_id: "MehulKumar_27112002", 
    email: "mk3416@srmist.edu.in",
    roll_number: "RA2111033010155",
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : [],
    file_valid: fileValid,
    file_mime_type: fileMimeType,
    file_size_kb: fileSizeKb.toFixed(2),
  };

  return res.json(response);
};


const getOperationCode = (req, res) => {
  return res.status(200).json({ operation_code: 1 });
};

module.exports = { processRequest, getOperationCode };
