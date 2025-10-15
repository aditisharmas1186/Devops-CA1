FROM python:3.6.2-alpine3.6

WORKDIR /app
COPY . /app

RUN apk add -U --no-cache --virtual .build-deps \
    gcc linux-headers musl musl-dev \
    && pip install -r requirements.txt --no-cache-dir \
    && apk del .build-deps \
    && rm -rf /var/cache/apk/*

# Directly run Gunicorn (no start.sh needed)
CMD ["gunicorn", "-k", "gevent", "-b", "0.0.0.0:5000", "--chdir", "/app", "app:app"]
