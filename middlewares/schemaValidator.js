class SchemaValidator {
  validateSchema(schema, obj) {
    return schema.validate(obj);
  }

  validate(schema) {
    return (request, response, next) => {
      const { body } = request;
      const { error } = this.validateSchema(schema, body);
      if (error) {
        return response.status(422).json({ errors: error.details });
      }
      return next();
    };
  }
}

module.exports = SchemaValidator;
