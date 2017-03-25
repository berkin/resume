FROM node:onbuild


RUN cd /tmp \
	&& apt-get update \
	&& apt-get install nasm \
	&& apt-get install -y wkhtmltopdf

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY . /usr/src/app/
RUN npm install

EXPOSE 3444

CMD [ "npm", "start"]
