import mg from "../mailgun"
import bronzeWelcomeEmailText from "./email_templates/welcome_to_usaco_bronze_video_txt"
import bronzeWelcomeEmail from "./email_templates/welcome_to_usaco_bronze_video"
import liveWelcomeEmailText from "./email_templates/welcome_to_live_class_txt"
import liveWelcomeEmail from "./email_templates/welcome_to_live_class"

const replacePlaceholders = (str: string, data: { [key: string]: string }) => {
  return str.replace(/\{\{(\w+)\}\}/g, (_, key) => {
    return data[key] || ""
  });
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
  joinLink,
}: {
  recipient: string
  fname: string
  lname: string
  classLevel: "beginner" | "intermediate"
  joinLink: string
}) {
  if (classLevel !== "beginner" && classLevel !== "intermediate") {
    throw new Error("Unknown class level while sending email: " + classLevel)
  }
  const classLevelText = classLevel === "beginner" ? "Beginner" : "Intermediate"
  const placeholders = {
    name: fname,
    join_link: joinLink,
    welcome_text:
      classLevel === "beginner"
        ? `You've been registered for the Competitive Programming Initiative's Beginner USACO Class! Our class will be ten weeks long, starting on October 6, 2024, and ending on December 8, 2024. We'll meet every Sunday from 5 PM to 7 PM PDT.`
        : `You've been registered for the Competitive Programming Initiative's Intermediate USACO Class! Our class will be ten weeks long, starting on October 5, 2024, and ending on December 7, 2024. We'll meet every Saturday from 4 PM to 6 PM PDT.`,
    join_lms_text:
      classLevel === "beginner"
        ? `To join the class, you'll need to join our online LMS using this unique link: ${joinLink}. The first time you join, you'll need to log in with your Google account. After joining, you can use this link to re-access the class: https://usaco.guide/groups.`
        : `To join the class, you'll need to join our online LMS using this unique link: ${joinLink}. The first time you join, you'll need to log in with your Google account. After joining, you can use this link to re-access the class: https://usaco.guide/groups.`,
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
