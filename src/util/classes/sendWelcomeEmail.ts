import mg from "../mailgun"
import bronzeWelcomeEmailText from "./email_templates/welcome_to_usaco_bronze_video_txt"
import bronzeWelcomeEmail from "./email_templates/welcome_to_usaco_bronze_video"
import liveWelcomeEmailText from "./email_templates/welcome_to_live_class_txt"
import liveWelcomeEmail from "./email_templates/welcome_to_live_class"

const replacePlaceholders = (str: string, data: { [key: string]: string }) => {
  return str.replace(/\{\{(\w+)\}\}/g, (_, key) => {
    return data[key] || ""
  })
}

export function sendWelcomeEmailBronzeVideos({
  recipient,
  fname,
  lname,
  joinLink,
}: {
  recipient: string
  fname: string
  lname: string
  joinLink: string
}) {
  return mg.messages.create("classes.joincpi.org", {
    from: "Competitive Programming Initiative <team@classes.joincpi.org>",
    to: [`${fname} ${lname} ${recipient}`],
    subject: "Welcome to the CPI Bronze Video Class!",
    text: replacePlaceholders(bronzeWelcomeEmailText, {
      name: fname,
      join_link: joinLink,
    }),
    html: replacePlaceholders(bronzeWelcomeEmail, {
      name: fname,
      join_link: joinLink,
    }),
    "h:Reply-To": "classes@joincpi.org",
  })
}

export function sendWelcomeEmail({
  recipient,
  fname,
  lname,
  classLevel,
}: {
  recipient: string
  fname: string
  lname: string
  classLevel: "beginner" | "intermediate"
}) {
  if (classLevel !== "beginner" && classLevel !== "intermediate") {
    throw new Error("Unknown class level while sending email: " + classLevel)
  }
  const classLevelText = classLevel === "beginner" ? "Beginner" : "Intermediate"
  const placeholders = {
    name: fname,
    join_link:
      classLevel === "beginner"
        ? `https://usaco.guide/groups/join?key=k4ZYMaRxGyO7tZMG1eKG`
        : `https://usaco.guide/groups/join?key=oij8GnJkMNgIUG9JXup1`,
    welcome_text:
      classLevel === "beginner"
        ? `You've been registered for the Competitive Programming Initiative's Beginner USACO Class! Our class will be nine weeks long, starting on June 26, 2022, and ending on August 21, 2022. We'll meet every Sunday from 4 PM to 6 PM PT.`
        : `You've been registered for the Competitive Programming Initiative's Intermediate USACO Class! Our class will be nine weeks long, starting on June 25, 2022, and ending on August 20, 2022. We'll meet every Saturday from 4 PM to 6 PM PT.`,
    join_lms_text:
      classLevel === "beginner"
        ? `To join the class, you'll need to join our online LMS using this link: https://usaco.guide/groups/join?key=k4ZYMaRxGyO7tZMG1eKG. The first time you join, you'll need to log in with your Google account. After joining, you can use this link to re-access the class: https://usaco.guide/groups.`
        : `To join the class, you'll need to join our online LMS using this link: https://usaco.guide/groups/join?key=oij8GnJkMNgIUG9JXup1. The first time you join, you'll need to log in with your Google account. After joining, you can use this link to re-access the class: https://usaco.guide/groups.`,
    class_level: classLevelText,
  }
  return mg.messages.create("classes.joincpi.org", {
    from: "Competitive Programming Initiative <team@classes.joincpi.org>",
    to: [`${fname} ${lname} ${recipient}`],
    subject: `Welcome to your CPI ${classLevelText} Class!`,
    text: replacePlaceholders(liveWelcomeEmailText, placeholders),
    html: replacePlaceholders(liveWelcomeEmail, placeholders),
    "h:Reply-To": "classes@joincpi.org",
  })
}
