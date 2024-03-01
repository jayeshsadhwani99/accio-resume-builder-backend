export const handleResume = (req, res) => {
  const { page, limit } = req.query;
  res.json({
    message: "Handle Resume function",
    success: true,
    page,
    limit,
  });
};

// CORS - Cross-origin Resource Sharing
export const addResumeData = (req, res) => {
  const {
    personalData,
    workExperience,
    projects,
    education,
    skills,
    languages,
  } = req.body;

  res.json({
    success: true,
    message: "Data for Resume Added",
    personalData,
    workExperience,
    projects,
    education,
    skills,
    languages,
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
