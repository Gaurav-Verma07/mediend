/**
 * Appends values in a Spreadsheet.
 * @param {string} spreadsheetId The spreadsheet ID.
 * @param {string} range The range of values to append.
 * @param {object} valueInputOption Value input options.
 * @param {(string[])[]} _values A 2d array of values to append.
 * @return {obj} spreadsheet information
 */
async function appendValues(
  spreadsheetId: string,
  range: string,
  valueInputOption: string,
  _values: string[]
) {
  const { GoogleAuth } = require("google-auth-library");
  const { google } = require("googleapis");

  const auth = new GoogleAuth({
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const service = google.sheets({ version: "v4", auth });
  let values = [
    [
      // Cell values ...
    ],
    // Additional rows ...
  ];
  const resource = {
    values,
  };
  try {
    const result = await service.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption,
      resource,
    });
    console.log(`${result.data.updates.updatedCells} cells appended.`);
    return result;
  } catch (err) {
    // TODO (developer) - Handle exception
    throw err;
  }
}
