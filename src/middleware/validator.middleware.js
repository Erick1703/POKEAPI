export const validateSchema = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body); // Validate the request body using the schema
        next(); // Call next if validation is successful
    } catch (error) {
        return res.status(400)
        .json(error.errors.map((error) => error.message) // Return validation error messages
        );
    }
};