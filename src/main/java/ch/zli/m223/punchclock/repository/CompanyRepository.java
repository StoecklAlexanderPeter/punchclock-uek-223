package ch.zli.m223.punchclock.repository;

import ch.zli.m223.punchclock.domain.Company;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyRepository extends JpaRepository<Company, Long> {
}
