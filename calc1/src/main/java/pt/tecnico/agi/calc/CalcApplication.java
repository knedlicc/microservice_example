package pt.tecnico.agi.calc;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.reactive.function.client.WebClient;

@SpringBootApplication
public class CalcApplication {
	public static void main(String[] args) {
		SpringApplication.run(CalcApplication.class, args);
	}

	@Value("${storage.url}")
	private String storageUrl;

	@Bean
	public WebClient webClient() {
		return WebClient.builder().baseUrl(storageUrl).build();
	}
}
