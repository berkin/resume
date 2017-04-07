FROM node:onbuild


RUN cd /tmp \
	&& apt-get update \
	&& wget http://download.gna.org/wkhtmltopdf/0.12/0.12.4/wkhtmltox-0.12.4_linux-generic-amd64.tar.xz \
	&& tar xvf wkhtmltox-0.12.4_linux-generic-amd64.tar.xz \
	&& mv wkhtmltox/bin/wkhtmlto* /usr/bin/

RUN apt-get install nasm

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY . /usr/src/app/
RUN npm install --no-bin-links


EXPOSE 8000

CMD [ "npm", "start"]
