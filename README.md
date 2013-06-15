# SHIN-NY RESTful API Wrapper

This is a RESTful wrapper for some sample data from the SHIN-NY API.  All
responses are in XML fomat.

This API is deployed live to: [http://shin-ny.herokuapp.com/](http://shin-ny.herokuapp.com/)

### GET /bb/record/documentreference/:id/document

This endpoint will return an XML file containing all medical records for patient
with the given ID.  For example:

    GET http://shin-ny.herokuapp.com/bb/record/documentreference/1/document

would yeild the records for patient id #1.  You can see some sample data in the
`/data` directory.

You can also reference this as `/patients/:id` if you want a more concise
enpoint.
