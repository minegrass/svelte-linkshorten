FROM alpine:latest


RUN apk add --no-cache \
    unzip \
    ca-certificates

# download and unzip mailhog
ADD https://github.com/mailhog/MailHog/releases/download/v1.0.1/MailHog_linux_amd64 /mailhog/MailHog_linux_amd64


# start PocketBase
CMD ["/mailhog/MailHog_linux_amd64"]