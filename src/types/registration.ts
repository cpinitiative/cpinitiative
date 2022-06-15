type BaseClassRegistration = {
  id: string
  data: {
    financialAid: boolean

    // only if finaid
    financialAidApplication?: {
      amount: number
      whyInNeed: string
      whyTakeCourse: string
    }
    status?: "PENDING" | "ACCEPTED"

    // only if not finaid
    orderDetails?: {
      paymentSource: string
      orderID: string
      facilitatorAccessToken: string
      billingToken: string | null
      paymentID: string | null
      payerID: string
    }
    orderId?: string

    level: "beginner" | "intermediate"
    paid: boolean
    personalInfo: {
      timezone: string
      referrerDetail: string
      firstName: string
      lastName: string
      email: string
      referrer: string
      preferredLanguage: string
    }

    timestamp: any // firebase timestamp??

    joinLink: string
  }
}

export type LiveClassRegistration = BaseClassRegistration

export type ClassRegistration = BaseClassRegistration
