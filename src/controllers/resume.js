export const handleResume = (req, res) => {
  const { page, limit } = req.query;
  res.json({
    message: "Handle Resume function",
    success: true,
    page,
    limit,
  });
};

export const addResumeData = (req, res) => {
  const { name, phoneNumber } = req.body;

  res.json({
    success: true,
    message: "Data for Resume Added",
    name,
    phoneNumber,
  });
};

export const getResumeById = (req, res) => {
  // Parameter - I want to get access to this parameter
  const { id } = req.params;

  res.json({
    success: true,
    message: `Found resume with the id of ${id}`,
  });
};
