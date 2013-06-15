# SHIN-NY RESTful API Wrapper

This is a RESTful wrapper for some sample data from the SHIN-NY API.  All
responses are in XML fomat.

## GET /bb/record/documentreference/:id/document

This endpoint will return an XML file containing all medical records for patient
with the given ID.  For example:

    GET /bb/record/documentreference/1/document

would yeild the records for patient id #1.  You can see some sample data in the
`/data` directory.
