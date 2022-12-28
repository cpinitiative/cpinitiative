import {
  ClassRegistration,
  LiveClassRegistration,
} from "../../types/registration"

function exportToCsv(filename, rows) {
  var processRow = function (row) {
    var finalVal = ""
    for (var j = 0; j < row.length; j++) {
      var innerValue = (row[j] ?? "").toString()
      if (row[j] instanceof Date) {
        innerValue = row[j].toLocaleString()
      }
      var result = innerValue.replace(/"/g, '""')
      if (result.search(/("|,|\n)/g) >= 0) result = '"' + result + '"'
      if (j > 0) finalVal += ","
      finalVal += result
    }
    return finalVal + "\n"
  }

  var csvFile = ""
  for (var i = 0; i < rows.length; i++) {
    csvFile += processRow(rows[i])
  }

  var blob = new Blob([csvFile], { type: "text/csv;charset=utf-8;" })
  var link = document.createElement("a")
  if (link.download !== undefined) {
    // feature detection
    // Browsers that support HTML5 download attribute
    var url = URL.createObjectURL(blob)
    link.setAttribute("href", url)
    link.setAttribute("download", filename)
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
}

const getSharedRegistrationInfo = (registrations: ClassRegistration[]) => {
  let rows = [
    [
      "Firebase ID",
      "First Name",
      "Last Name",
      "Email",
      "Referrer",
      "Referrer Detail",
      "Timezone",
      "Level",
      "Preferred Language",
      "Financial Aid",
      "Financial Aid Status",
      "Join Link",
      "Timestamp",
    ],
  ]
  for (let registration of registrations) {
    rows.push([
      registration.id,
      registration.data.personalInfo.firstName,
      registration.data.personalInfo.lastName,
      registration.data.personalInfo.email,
      registration.data.personalInfo.referrer,
      registration.data.personalInfo.referrerDetail,
      registration.data.personalInfo.timezone,
      registration.data.level,
      registration.data.personalInfo.preferredLanguage,
      registration.data.financialAid ? "Yes" : "No",
      registration.data.status || "",
      registration.data.joinLink || "",
      new Date(registration.data.timestamp.seconds * 1000).toLocaleString(),
    ])
  }
  return rows
}

export function exportLiveRegistrations(registrations: ClassRegistration[]) {
  let rows = getSharedRegistrationInfo(registrations)
  exportToCsv("live_class_registrations.csv", rows)
}

export function exportRegistrations(registrations: ClassRegistration[]) {
  let rows = getSharedRegistrationInfo(registrations)
  exportToCsv("video_class_registrations.csv", rows)
}
