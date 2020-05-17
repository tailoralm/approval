package com.tailoralm.approval.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.tailoralm.approval.model.Solicitation;

@Repository
public interface SolicitationRepository extends JpaRepository<Solicitation, Long>{
	
	@Query(value = "SELECT * FROM APPROVALFLOW.SOLICITATION WHERE STATUS = 0", nativeQuery = true)
	List<Solicitation> findApprovedSolicitations();
	
	@Query(value = "SELECT * FROM APPROVALFLOW.SOLICITATION WHERE STATUS = 1", nativeQuery = true)
	List<Solicitation> findPendingSolicitations();
	
	@Query(value = "SELECT * FROM APPROVALFLOW.SOLICITATION WHERE STATUS = 2", nativeQuery = true)
	List<Solicitation> findRejectedSolicitations();
	
	@Query(value = "SELECT * FROM APPROVALFLOW.SOLICITATION WHERE NAME LIKE %:name%", nativeQuery = true)
	List<Solicitation> findSolicitationsByName(@Param("name") String name);
	
	@Query(value = "SELECT * FROM APPROVALFLOW.SOLICITATION WHERE DESCRIPTION LIKE %:desc%", nativeQuery = true)
	List<Solicitation> findSolicitationsByDesc(@Param("desc") String desc);

}
