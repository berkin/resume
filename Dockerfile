FROM node:onbuild


RUN cd /tmp \
	&& apt-get update \

	&& wget http://download.gna.org/wkhtmltopdf/0.12/0.12.3/wkhtmltox-0.12.3_linux-generic-amd64.tar.xz \
	&& tar xvf wkhtmltox-0.12.3_linux-generic-amd64.tar.xz \
	&& mv wkhtmltox/bin/wkhtmlto* /usr/bin/

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY . /usr/src/app/
RUN npm install --no-bin-links
RUN npm un url-loader image-webpack-loader --save-dev

RUN apt-get install nasm
RUN npm i url-loader image-webpack-loader --save-dev


EXPOSE 3444

CMD [ "npm", "start"]
