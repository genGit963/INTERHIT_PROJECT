/**
 * Extracts the first letters of the first and last names from a full name.
 * @param fullName - A string representing the full name.
 * @returns A string containing the first letters of the first and last names.
 */

export function getShortHandOfName(fullName: string): string {
  // Trim any leading or trailing whitespace and split the name by spaces
  const nameParts = fullName.trim().split(/\s+/);

  // If there's only one part, return an empty string
  if (nameParts.length < 2) {
    return '';
  }

  // Get the first letter of the first name
  const firstNameInitial = nameParts[0][0].toUpperCase();

  // Get the last name (last part of the split nameParts array)
  const lastNameInitial = nameParts[nameParts.length - 1][0].toUpperCase();

  // Return the initials combined
  return `${firstNameInitial}${lastNameInitial}`;
}
